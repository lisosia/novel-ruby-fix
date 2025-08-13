# Edge Ruby Reader Fix

Edge の読み上げで `<ruby>` が誤読される問題を回避し、見た目はそのままルビ表示にする拡張機能です。  
小説投稿サイト（なろう、カクヨム、ハーメルンなど）に対応。

## インストール方法

1. このリポジトリを ZIP でダウンロードし、解凍します。
2. Edge で `edge://extensions/` を開きます。
3. 左側の **「デベロッパー モード」** をオンにします。
4. **「展開して読み込む」** をクリックし、解凍したフォルダを選択します。
5. 対応サイトを開くと、自動でルビ変換が適用されます。

## 対応サイト
- 小説家になろう (`ncode.syosetu.com` 他)
- カクヨム (`kakuyomu.jp`)
- ハーメルン (`hameln.jp`)
- 暁（`www.akatsuki-novels.com`）

## 動作概要
- `<ruby>` タグを `<span class="ruby-outer"><span class="ruby-inner">…</span></span>` に変換
- CSS でルビ表示を再現しつつ、Edge 読み上げで正しく発音されるよう調整
