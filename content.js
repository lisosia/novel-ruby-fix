(function() {
  function replaceRuby() {
    document.querySelectorAll("ruby").forEach(ruby => {
      let rbText = "";
      let rtText = "";

      // <rb>タグがあればそれを優先
      const rb = ruby.querySelector("rb");
      const rt = ruby.querySelector("rt");

      if (rb) {
        rbText = rb.textContent;
      } else {
        // <rb>がない場合、rt以外のテキストをベースにする
        rbText = ruby.cloneNode(true);
        rbText.querySelectorAll("rt,rp").forEach(el => el.remove());
        rbText = rbText.textContent;
      }

      if (rt) {
        rtText = rt.textContent;
      }

      // 新しい要素を作成
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
