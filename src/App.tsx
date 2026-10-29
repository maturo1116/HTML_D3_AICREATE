import { useState } from "react";
import "./App.css";

type Game = {
  name: string;
  file: string;
  image: string;
  creator: string;
  description: string;
  controls: string;
};

const games: Game[] = [
  {
    name: "SLIME BREAKOUT",
    file: "/games/22/code_artifact.html",
    image: "/games/22/22.png",
    creator: "宮之前　陽大",
    description: "攻めてくる敵を倒していくパワーディフェンスゲーム",
    controls: "ドラッグでスライムを動かしたりスキルを選んだりして敵を倒しまくる。",
  },
  {
    name: "左右だけピンポン",
    file: "/games/8/code_artifact.html",
    image: "/games/8/8.png",
    creator: "川畑　咲哉",
    description: "普通のリズムゲームです",
    controls: `制限時間：1分間（60秒）

操作方法：
スマホ：画面左右の「◀ 左」「▶ 右」ボタンをタップします。
PC：キーボードの ←（左矢印）キーと →（右矢印）キーを使います。

ルール：
画面の中央から左右どちらかへ向かって飛んでくるボール（球）が、プレイヤーのラケット位置に到達した瞬間に、正しい方向のボタンを押して打ち返します。`,
  },
  {
    name: "MOSQUITO MISSION",
    file: "/games/19/code_artifact.html",
    image: "/games/19/19.png",
    creator: "前迫　紫優",
    description: "蚊を生き残らせるために制限時間以内に五つの選択肢から一つを選ぶマルチエンディングゲームです。",
    controls: "タップのみ",
  },
  {
    name: "無料ガチャガチャ",
    file: "/games/15/code_artifact.html",
    image: "/games/15/15.png",
    creator: "中村　礼志",
    description: "一生ガチャが回せるどぱがきゲーム",
    controls: "タップで回すだけ",
  },
  {
    name: "CYBER DANMAKU",
    file: "/games/14/code_artifact.html",
    image: "/games/14/14.png",
    creator: "瀬脇　麗陽",
    description: "弾幕ゲームです。",
    controls: `移動：矢印キー / WASD / ドラッグ
攻撃：自動発射
低速：Shiftキーを押し続ける
※タッチ操作では低速モードは機能していません。自機の判定確認にお使いください。
ボム：Xキー / ボムボタン
一時停止：Pキー / Escキー / ポーズボタン
タイトル画面ではタッチ操作で使うボタンの配置を左右どちらに置くか変更できます。
一定範囲で弾をよけるとGrazeが増え、30・60になると自機にビットが付きます（最大二つ）。
フェーズ3まであります。
フェーズが進むごとに弾幕の種類が増えます（自機狙いや自機外しなど）。
プレイ時間は計っていないので分かりません。`,
  },
  {
    name: "鹿児島 LURE MASTER REAL EXTRA",
    file: "/games/10/code_artifact.html",
    image: "/games/10/10.png",
    creator: "北山　里來",
    description: "様々な魚や伝説の怪魚を釣り上げる本格フィッシングシミュレーションゲームです。",
    controls: `ゲーム説明 & 操作マニュアル

🎮 ゲームの概要

「鹿児島 LURE MASTER REAL EXTRA」は、鹿児島の有名釣り場を巡りながら、多彩な仕掛け（ルアー・泳がせ釣り・ぶっこみ釣り）を駆使して様々な魚や伝説の怪魚を釣り上げる本格フィッシングシミュレーションゲームです。

- 実在する8つのフィールド：重富漁港、錦江湾、東串良・肝属川河口、笠沙、佐多岬、屋久島、奄美大島、トカラ列島。
- ターゲット：アジやチヌなどの身近な魚から、ヒラメ、ブリ、そしてアカメ・GT・巨クエといった超大型怪魚まで計14種類。
- 独自のシステム：釣った小魚を「生きエサ」としてキープし大物を狙う泳がせ釣りや、釣った魚を観賞・育成できる「マイ水族館」機能を搭載しています。

🕹️ 基本的な操作方法

画面上部のナビゲーションボタンで各画面を切り替えます。

1. 釣り場画面（ゲームメイン）

【仕掛け（釣法）の選択】
キャスト前に画面下の「釣法」で切り替えます。

- ルアー：定番のルアーフィッシング。アクションで魚を誘います。
- 泳がせ：アジやカサゴなどの小魚（生きエサ）を使って大物を狙います。
- ぶっこみ：底深くに仕掛けを沈めて大物や根魚を狙います。

【キャスト（投げる）】
1. ゲージが左右に動くので、タイミング良く「キャストする！」ボタンを押します。
2. ゲージの溜まり具合によってルアー・仕掛けの飛距離が変わります。

【水中アクション & アタリ待ち】
- ルアーモード：「トゥイッチ」「ジャーク」「タダ巻き」「フォール」のボタンを使ってルアーを動かし、魚の興味を惹きます。
- 泳がせ／ぶっこみモード：ボタンで仕掛けを馴染ませながら待機します。アタリが来ると画面に「今だ！アワセを入れる！！」という巨大なボタンが出現するので、制限時間内にすばやくタップ（アワセ）します。

【ファイト（引き上げ）】
- 「巻く（長押し）」ボタン：押している間リールを巻き上げます。
- テンション管理：巻きすぎると「LINE TENSION（ラインテンション）」が上がり、100%近くになると糸が切れて失敗します。適度にボタンを離してテンションを下げつつ、魚の体力を削りましょう。
- ドラグ調整：ボタンを押すことでラインにかかる負担（テンションの上昇スピード）を調整できます。

【釣果の処理】
魚を釣り上げると、以下の3つから扱いを選択できます。

1. 市場で売却：現金化して新しい道具の購入資金にする。
2. 水族館へ送る：「マイ水族館」で泳がせ、育成する。
3. 生きエサバケツにキープ：（※アジ・カサゴ等の小魚のみ）次の泳がせ釣りのエサとして使用する。

🗺️ その他のメニュー画面

- 任務：ミッションを達成すると報酬金が得られます（例：「魚を3匹釣る」「泳がせ釣りで釣る」など）。
- 水族館：キープした魚たちが泳ぐ水槽です。1回1,000円で「エサやり」をすると、魚が成長して売却価格が上がります。
- マップ：遠征するフィールドを選択できます。
- 釣具店：竿（ロッド）、リール、糸（ライン）、ルアーを購入・装備できます。高級なタックルほどキャスト飛距離や巻き上げ力、糸の耐久度がアップします。
- 装備 & 図鑑：現在の装備確認と、これまでに釣り上げた魚のコレクション（最大サイズ・釣果数）を確認できます。`,
  },
  {
    name: "テトリス",
    file: "/games/20/code_artifact.html",
    image: "/games/20/20.png",
    creator: "前野　優人",
    description: "テトリスです。",
    controls: `スマホ・タブレット（画面のボタン）
◀ / ▶：ブロックを左右に動かします。
▼：ブロックを少し早く落とします。
DROP：ブロックを一番下まで一気に落とします。
↺ 回転 / ↻ 回転：ブロックを左右に回します。
HOLD：いまのブロックを保存し、あとで使えます。

上から落ちてくる色鮮やかなブロック（テトロミノ）を隙間なく並べて消していく、シンプルで爽快な落ち物パズルゲームです！

🌟 ゲームのルール
横一列にブロックを隙間なく並べると、その列が消えてスコアを獲得できます。
ブロックが一番上まで積み上がってしまうとゲームオーバーです。
ラインを消すごとにレベルがUPし、ブロックの落ちるスピードが速くなります！`,
  },
  {
    name: "Ragdoll Battle Simulator 2D",
    file: "/games/1＆7/code_artifact.html",
    image: "/games/1＆7/1＆7.png",
    creator: "有馬　純豊　＆　假屋　瑛太",
    description: "バトルシュミレーター",
    controls: `🎮 Ragdoll Battle 2D チュートリアル
コミカルな2D物理戦闘シミュレーターへようこそ！

自軍の兵士を配置して、敵軍を壊滅させましょう！

🔰 基本操作とルール
1. 画面の操作とモード切り替え
画面右上の モード切り替えボタン で、操作モードを切り替えます。

✋ カメラ移動モード: 画面をドラッグして見たい場所へ移動。ズーム（マウスホイール/ピンチ操作）も可能。

⚔️ 兵士配置モード: 配置したい兵士を下部パレットから選び、自軍エリア（赤軍は画面左側）をタップして配置！

🗑️ 範囲削除モード: ドラッグで囲んだ範囲内の味方兵士を一括削除＆コスト返金！

⚔️ 登場ユニット一覧
ユニット	特徴・役割	コスト
棍棒兵

安価で大量配置可能な基本歩兵。数の力で押そう！

50G

剣士

バランスの取れた標準的な近接兵士。

100G

盾兵

高い耐久力とシールドバッシュで前線を維持！

120G

槍兵

長いリーチを活かして相手の間合いの外から攻撃！

150G

弓兵

後方からの遠距離狙撃。前衛で守るのがカギ！

180G

騎士

超高速疾走＆強烈ノックバック！ 相手の陣形をなぎ払う最強の騎兵。

250G

巨人

圧倒的HPと広範囲を吹き飛ばす強力な攻撃を繰り出す。

1200G

💡 攻略のヒント（勝利のコツ）
前衛と後衛の組み合わせ

盾兵や巨人を前衛に置き、後ろから弓兵で遠距離攻撃するのが基本戦術！

騎士（Knight）の一撃離脱

騎士は相手の当たり判定を無視して時速500で疾走します。敵の密集地帯に突入させて敵陣を崩壊させましょう！

予算（Budget）管理

ステージモードでは限られた所持金の中で最適な兵種バランスを考えるのが勝利への近道です。`,
  },
  {
    name: "爆弾仕分けゲーム",
    file: "/games/12/code_artifact.html",
    image: "/games/12/12.png",
    creator: "迫田　輝士",
    description: "画面内にどんどん歩いてくる爆弾を、爆発する前に色に合わせて素早く左右のエリアへ仕分けるアクションパズルゲームです。",
    controls: `操作方法
ドラッグ＆ドロップ（またはスワイプ）: 画面上の爆弾を指やマウスで掴み、対応する色のエリア（左の黒 / 右の赤）まで運んで放します。エリアに触れた瞬間に即時判定され、+1ポイント 加算されます。

タイトルに戻る（右上ボタン）: ゲームが一時停止されます。「はい」を選ぶとタイトル画面に戻り、「いいえ」を選ぶとゲームを再開できます。`,
  },
  {
    name: "",
    file: "/games/9/code_artifact.html",
    image: "/games/9/9.png",
    creator: "",
    description: "",
    controls: "",
  },
  {
    name: "",
    file: "/games/10/code_artifact.html",
    image: "/games/10/10.png",
    creator: "",
    description: "",
    controls: "",
  },
  {
    name: "",
    file: "/games/11/code_artifact.html",
    image: "/games/11/11.png",
    creator: "",
    description: "",
    controls: "",
  },

function App() {
  const [selected, setSelected] = useState<Game | null>(null);

  const registeredGames = games.filter(
    (game) => game.name.trim() !== ""
  );

  async function enterFullscreen() {
    const frame = document.querySelector(".game-frame");

    if (!(frame instanceof HTMLIFrameElement)) return;

    try {
      await frame.requestFullscreen();
    } catch (error) {
      console.error("全画面表示に失敗しました", error);
    }
  }

  return (
    <main>
      {selected ? (
        <>
          <div className="game-toolbar">
            <button
              className="toolbar-button"
              onClick={() => setSelected(null)}
            >
              ← 一覧
            </button>

            <h1>{selected.name}</h1>

            <button
              className="toolbar-button"
              onClick={enterFullscreen}
            >
              ⛶ 全画面
            </button>
          </div>

          <iframe
            className="game-frame"
            src={selected.file}
            title={selected.name}
            allow="fullscreen"
            allowFullScreen
          />

          <section className="details">
            <h2>ゲーム情報</h2>

            <p>
              <strong>製作者：</strong>
              {selected.creator || "未登録"}
            </p>

            <p>
              <strong>説明：</strong>
              {selected.description || "未登録"}
            </p>

            <h3>操作方法</h3>
            <p className="controls">
              {selected.controls || "未登録"}
            </p>
          </section>
        </>
      ) : (
        <>
          <h1 className="library-title">ゲームライブラリ</h1>

          <div className="games">
            {registeredGames.map((game) => (
              <button
                className="game"
                key={game.file}
                onClick={() => setSelected(game)}
              >
                <img
                  className="game-thumbnail"
                  src={game.image}
                  alt={`${game.name}のプレビュー`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="game-info">
                  <h2>{game.name}</h2>
                  <p>{game.description}</p>
                  <p>製作者：{game.creator}</p>
                  <span>プレイ →</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default App;