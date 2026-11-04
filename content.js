const AD_SELECTORS = [
  'ins.adsbygoogle',
  '[id^="google_ads_iframe"]',
  '[id^="div-gpt-ad"]',
  '.adsbox',
  '.ad-container',
  '.ad-slot',
  '.advertisement'
];

function removeAds(root = document) {
  const selector = AD_SELECTORS.join(', ');
  const ads = root.querySelectorAll(selector);
  ads.forEach(ad => ad.remove());
}

removeAds();

const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.addedNodes.length) {
      removeAds(mutation.target);
    }
  }
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});