(function() {
  function replaceRuby() {
    document.querySelectorAll("ruby").forEach(ruby => {
      let rbText = "";
      let rtText = "";

      const rb = ruby.querySelector("rb");
      const rt = ruby.querySelector("rt");

      if (rb) {
        rbText = rb.textContent;
      } else {
        rbText = ruby.cloneNode(true);
        rbText.querySelectorAll("rt,rp").forEach(el => el.remove());
        rbText = rbText.textContent;
      }

      // rtがなければスキップ
      if (!rt) { return; }
      rtText = rt.textContent;

      // rtTextが記号のみならスキップ。強調の点（圏点）は処理対象から外す
      // 記号のみ判定 (UnicodeのPunctuation(P)またはSymbol(S)のみ)
      const isSymbolsOnly = /^[\p{P}\p{S}]+$/u.test(rtText);
      if (isSymbolsOnly) {
        return; // 処理スキップ
      }

      const outer = document.createElement("span");
      outer.className = "ruby-outer";
      outer.setAttribute("data-ruby-base", rbText);

      const inner = document.createElement("span");
      inner.className = "ruby-inner";
      inner.textContent = rtText;

      outer.appendChild(inner);
      ruby.replaceWith(outer);
    });
  }

  replaceRuby();
})();
