
# 何をするか
- Node.js の管理を nodebrew から anyenv + nodenv に変更する
- それによってプロジェクト毎に Node.js のバージョンを管理することを可能とする

# 前提となる環境について
- macOS Catalina zsh
- nodebrew で Node.js を管理している
- nodebrew は homebrew で管理している

# 参考にしたエントリ
- MacにNode.jsをインストール（anyenv + nodenv編）
https://qiita.com/kyosuke5_20/items/eece817eb283fc9d214f

# 手順
## nodebrew 用の環境変数のエクスポートを削除
- `.zprofile` の設定を確認
- nodebrew 用の環境変数エクスポートが書かれているはず

```zsh
% cat ~/.zprofile
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

- 適当なエディタで上記のエクスポートを削除
```zsh
vim ~/.zprofile
```

## anyenv のインストール
- homebrew で インストール
```zsh
% brew install anyenv
```

- インストールされたことを確認
```zsh
% brew info anyenv 
anyenv: stable 1.1.2 (bottled)
All in one for **env

...省略...

```

## anyenv の初期設定
- anyenv の init コマンドを実行する
```zsh
% anyenv init
# Load anyenv automatically by adding
# the following to ~/.zshrc:

eval "$(anyenv init -)"
```

- 指示に従い `.zshrc` に追記する
```zsh
% echo 'eval "$(anyenv init -)"' >> ~/.zshrc
```

- 追記されたことを確認し、読み込む
```zsh
% cat ~/.zshrc
eval "$(anyenv init -)"
```

- 追記した設定を読み込む
```zsh
% source ~/.zshrc 
ANYENV_DEFINITION_ROOT(/Users/hoge/.config/anyenv/anyenv-install) doesn't exist. You can initialize it by:
> anyenv install --init
```

- さらに指示に従いコマンドを実行する
```
% anyenv install --init
Manifest directory doesn't exist: /Users/hoge/.config/anyenv/anyenv-install
Do you want to checkout ? [y/N]: y

...省略...

Completed!
```

## nodenv のインストール
- anyenv で nodenv をインストールする
```zsh
% anyenv install nodenv

...省略...

Install nodenv succeeded!
Please reload your profile (exec $SHELL -l) or open a new session.
```

- 指示に従い、設定をリロードする
```zsh
% exec $SHELL -l
```

- nodenv の環境変数が設定されていることを確認する
```zsh
% env | grep -i NODENV
PATH=/Users/hoge/.anyenv/envs/nodenv/shims:/Users/hoge/.anyenv/envs/nodenv/bin:/Users/hoge/.rbenv/shims:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/hoge/.rbenv/shims:/Users/hoge/.nodebrew/current/bin
NODENV_ROOT=/Users/hoge/.anyenv/envs/nodenv
NODENV_SHELL=zsh
```

## Node.js のインストール
- インストールできるバージョンを確認する
```zsh
% nodenv install -l
```

- インストールする
- ここでは、執筆時点で最新LTSの `12.18.3` をインストールする
```zsh
% nodenv install 12.18.3
Downloading node-v12.18.3-darwin-x64.tar.gz...
-> https://nodejs.org/dist/v12.18.3/node-v12.18.3-darwin-x64.tar.gz
Installing node-v12.18.3-darwin-x64...
Installed node-v12.18.3-darwin-x64 to /Users/hoge/.anyenv/envs/nodenv/versions/12.18.3

```

- デフォルトで使うバージョンを設定する
```zsh
% nodenv global 12.18.3
```

- 設定されたことを確認する
- ※自分はここでもう一度シェルを再起動させる必要があった
```zsh
% exec $SHELL -l
% node -v
v12.18.3
```

## 今回はここまで
- プロジェクト毎に個別のバージョンを設定するのは、またそのうち

## あとかたづけ
- ここまで来たら nodebrew が要らなくなるので、アンインストールする
```zsh
% brew uninstall nodebrew
Uninstalling /usr/local/Cellar/nodebrew/1.0.1... (8 files, 38.6KB)
```

- nodebrew でインストールした Node.js もあわせて削除されるのか？