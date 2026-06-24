/* Atlas first-party funnel tracker.
 * Fires page_view + apply_click to the portal's /api/track with a persistent
 * anonymous lead_id (the stitch key to the Typeform email later) and first-touch UTMs.
 * VSL watch-depth is NOT tracked here — it comes from the embedded VSL platform's
 * own analytics. (Expose window.atlasTrack so that platform's callbacks can forward
 * events if we ever want them unified.) */
(function () {
  'use strict';

  var ENDPOINT = window.ATLAS_TRACK_ENDPOINT || 'https://clientportal-two-rho.vercel.app/api/track';

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
  function lget(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lset(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // Persistent anonymous visitor id + per-tab session id.
  var leadId = lget('atlas_lead_id');
  if (!leadId) { leadId = uuid(); lset('atlas_lead_id', leadId); }
  var sessionId;
  try {
    sessionId = sessionStorage.getItem('atlas_session_id');
    if (!sessionId) { sessionId = uuid(); sessionStorage.setItem('atlas_session_id', sessionId); }
  } catch (e) { sessionId = uuid(); }

  // First-touch UTM capture (persist so later events keep attribution).
  var qs = new URLSearchParams(location.search);
  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var utm = {};
  UTM_KEYS.forEach(function (k) {
    var v = qs.get(k);
    if (v) lset('atlas_' + k, v);
    utm[k] = v || lget('atlas_' + k) || null;
  });

  function send(eventName, step, props) {
    var body = {
      event_name: eventName,
      step: step || null,
      lead_id: leadId,
      session_id: sessionId,
      page_path: location.pathname,
      page_location: location.href,
      referrer: document.referrer || null,
      utm_source: utm.utm_source,
      utm_medium: utm.utm_medium,
      utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content,
      utm_term: utm.utm_term,
      props: props || {}
    };
    var data = JSON.stringify(body);
    try {
      // text/plain keeps it a CORS-"simple" request (no preflight); the API JSON-parses regardless.
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([data], { type: 'text/plain;charset=UTF-8' }));
      } else {
        fetch(ENDPOINT, { method: 'POST', body: data, keepalive: true, mode: 'cors' });
      }
    } catch (e) {}
  }

  // Manual hook for the VSL platform (or anything else) to forward events.
  window.atlasTrack = send;

  // Landing view.
  send('page_view', 'landing');

  // Apply clicks (CTA buttons that open the Typeform application).
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest
      ? e.target.closest('[data-tf-popup], a[href*="typeform"], button.btn')
      : null;
    if (!el) return;
    send('apply_click', 'apply', { label: (el.textContent || '').trim().slice(0, 80) });
  }, true);
})();
