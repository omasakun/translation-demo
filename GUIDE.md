# お手軽！開発環境の整え方（Windows専用）

このドキュメントは、初心者でも Windows 上でコーディングを始められるように、必要なツールのインストール方法を紹介します。

## ⏱ 忙しい人向けのまとめ

以下のコマンドをターミナルにコピペするだけで、必要な環境が一気に整います！

```
winget install Microsoft.VisualStudioCode Git.Git version-fox.vfox astral-sh.uv pnpm.pnpm
```

> 💡 途中で「同意しますか？」などと聞かれることがあります。その場合は y（Yes）を選んで進めてください。

## 0. Windows に winget をセットアップ

Windows には、アプリを自動でインストールできる `winget`（Windows Package Manager）が用意されています。これを使うと、面倒なダウンロードやインストール作業を大幅に短縮できます。

### 手順：

1. Windows 11 なら基本的に最初から入っています。

2) Windows 10 の場合は、[App Installer](https://apps.microsoft.com/store/detail/app-installer/9NBLGGH4NNS1) を Microsoft Store からインストールすれば使えるようになります。
3) ターミナル（PowerShell または Windows Terminal）を開いて、次のように打って確認：

```powershell
winget --version
```

バージョンが表示されれば OK です。

> 💡 ターミナルの使い方：
>
> * スタートメニューを開いて「PowerShell」や「ターミナル」と検索して開けます。
> * よく使う場合は、タスクバーにピン留めしておくと便利です。
> * コマンドをコピペしたあとは、エンターキーを押してコマンドを実行しましょう！

## 1. VS Code をインストール

VS Code（Visual Studio Code）は、無料で使える人気のコードエディタです。

### 手順（ターミナルにコピペ！）：

```powershell
winget install --id Microsoft.VisualStudioCode
```

### 補足：

* 日本語化するには、拡張機能で「Japanese Language Pack」を検索してインストールすると便利です。
* その他にもPythonやJavaScriptなどの言語サポートを追加する拡張機能が豊富にあります。必要に応じてインストールしてください。

## 2. Git をインストール

Git は、コードの履歴を管理するツールです。GitHub などのサービスと連携して使います。

### 手順（ターミナルにコピペ！）：

```powershell
winget install --id Git.Git
```

### 補足：

* インストールに成功していれば、ターミナルで `git --version` と打ったときにバージョン情報が表示されます。

## 3. vfox をインストール

vfox は、Deno, Node.js, Bun などさまざまなランタイムを簡単に切り替えられるツールです。これを使うと、プロジェクトごとに異なるバージョンの Node.js を簡単に管理できます。

### 手順（ターミナルにコピペ！）：

```powershell
winget install --id version-fox.vfox
```

### 補足：

* インストールに成功していれば、ターミナルで `vfox --version`と打ったときにバージョン情報が表示されます。

## 4. uv をインストール

uv は、Python の仮想環境と依存関係を超高速で管理できるツールです。pip の代わりに使うと便利です。

### 手順（ターミナルにコピペ！）：

```powershell
winget install --id astral-sh.uv
```

### 補足：

* インストールに成功していれば、ターミナルで `uv --version`と打ったときにバージョン情報が表示されます。

## 5. pnpm をインストール

pnpm は、Node.js のパッケージマネージャーです。npm よりも高速で、ディスク容量を節約できます。

### 手順（ターミナルにコピペ！）：

```powershell
winget install --id pnpm.pnpm
```

### 補足：

* インストールに成功していれば、ターミナルで `pnpm --version`と打ったときにバージョン情報が表示されます。

## お疲れさまでした！

このあとは以下のようなステップに進むとよいでしょう：

* 好きなテンプレートを clone して始める
* `vfox` で Node.js や Deno をインストールする
* `uv` で Python の環境をすばやく作る

たとえばこのレポジトリを使う場合は、以下のコマンドをターミナルにコピペして実行してください：

```
cd $env:UserProfile\Desktop

git clone https://github.com/omasakun/translation-demo.git
cd translation-demo

vfox install --all
pnpm install

pnpm start
```

## 参考リンクまとめ

* VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Git: [https://git-scm.com/](https://git-scm.com/)
* vfox: [https://vfox.dev/](https://vfox.dev/)
* uv: [https://docs.astral.sh/uv/](https://docs.astral.sh/uv/)
* pnpm: [https://pnpm.io/](https://pnpm.io/)
* winget: [https://learn.microsoft.com/windows/package-manager/winget/](https://learn.microsoft.com/windows/package-manager/winget/)
