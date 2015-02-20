(function() {
  "use strict";

  var MemoryStatsElementPrototype = Object.create(window.HTMLElement.prototype),
      rafId = 0,
      stats;

  MemoryStatsElementPrototype.createdCallback = function() {
    stats = new MemoryStats();

    // Default. FIXME make this configurable
    stats.domElement.style.position = "fixed";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";

    this.appendChild(stats.domElement);
  };

  MemoryStatsElementPrototype.attachedCallback = function() {
    if (!stats) return;

    rafId = window.requestAnimationFrame(function rAFLoop() {
      stats.update();
      rafId = window.requestAnimationFrame(rAFLoop);
    });
  };

  MemoryStatsElementPrototype.detachedCallback = function() {
    if (rafId === 0) return;

    window.cancelAnimationFrame(rafId);
  };

  window.MemoryStatsElement = document.registerElement("memory-stats", {
    prototype: MemoryStatsElementPrototype
  });

})();
