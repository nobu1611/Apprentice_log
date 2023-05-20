# ステップ2
実際にテーブルを構築し、データを入れましょう。その手順をドキュメントとしてまとめてください（アウトプットは手順のドキュメントです）。

具体的には、以下のことを行う手順のドキュメントを作成してください。

1. データベースを構築します
2. ステップ1で設計したテーブルを構築します
3. サンプルデータを入れます。サンプルデータはご自身で作成ください（ChatGPTを利用すると比較的簡単に生成できます）
手順のドキュメントは、他の人が見た時にその手順通りに実施すればテーブル作成及びサンプルデータ格納が行えるように記載してください。

なお、ステップ2は以下のことを狙っています。

- データを実際に入れることでステップ3でデータ抽出クエリを試せるようにすること
- 手順をドキュメントにまとめることで、自身がやり直したい時にすぐやり直せること
- 手順を人が同じように行えるようにまとめることで、ドキュメントコミュニケーション力を上げること

##  データベースの構築
---
Homebrewを使用してMySQLをインストールします。ターミナルで以下のコマンドを実行してください。
```bash
brew install mysql
```
\
MySQLをインストールしてください。
```sql
mysql.server start
```
\
ユーザー名：practiceでログインしてください
```sql
mysql -u practice -p
```
\
データベースを作成してください
```sql
CREATE DATABASE internet_tv;
```
\
データベースを選択してください
```sql
USE internet_tv;
```

##  ステップ1で設計したテーブルを構築
---

```sql

CREATE TABLE channels (
    channel_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    channel_name VARCHAR(255) NOT NULL,
    UNIQUE (channel_name)
);

```

```sql

CREATE TABLE time_slots (
    time_slot_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    time_slot VARCHAR(255) NOT NULL,
    UNIQUE (time_slot)
);

```

```sql

CREATE TABLE genres (
    genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL,
    UNIQUE (genre_name)
);

```

```sql
CREATE TABLE programs (
    program_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR(255) NOT NULL,
    program_detail TEXT NOT NULL,
    UNIQUE (program_name)
);

```

```sql
CREATE TABLE program_genres (
    program_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (program_id, genre_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id),
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

```

```sql

CREATE TABLE episodes (
    episode_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    program_id INT NOT NULL,
    season_number INT,
    episode_number INT,
    title VARCHAR(255) NOT NULL,
    episode_detail TEXT,
    duration INT,
    release_date DATE,
    FOREIGN KEY (program_id) REFERENCES programs(program_id)
);

```

```sql

CREATE TABLE program_schedule (
    schedule_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    channel_id INT NOT NULL,
    time_slot_id INT NOT NULL,
    program_id INT NOT NULL,
    episode_id INT,
    view_count BIGINT DEFAULT 0,
    FOREIGN KEY (channel_id) REFERENCES channels(channel_id),
    FOREIGN KEY (time_slot_id) REFERENCES time_slots(time_slot_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id),
    FOREIGN KEY (episode_id) REFERENCES episodes(episode_id)
);

```


##  サンプルデータを入れる
---
チャンネルのサンプルデータ
```sql
INSERT INTO channels (channel_name)
VALUES
('ドラマチャンネル'),
('アニメチャンネル'),
('スポーツチャンネル'),
('ペットチャンネル');
```
\
時間帯のサンプルデータ
```sql
INSERT INTO time_slots (time_slot)
VALUES
('00:00-01:00'),
('01:00-02:00'),
('02:00-03:00'),
('03:00-04:00'),
('04:00-05:00'),
('05:00-06:00'),
('06:00-07:00'),
('07:00-08:00'),
('08:00-09:00'),
('09:00-10:00'),
('10:00-11:00'),
('11:00-12:00'),
('12:00-13:00'),
('13:00-14:00'),
('14:00-15:00'),
('15:00-16:00'),
('16:00-17:00'),
('17:00-18:00'),
('18:00-19:00'),
('19:00-20:00'),
('20:00-21:00'),
('21:00-22:00'),
('22:00-23:00'),
('23:00-24:00');
```
\
ジャンルのサンプルデータ
```sql
INSERT INTO genres (genre_name)
VALUES
('アニメ'),
('ドラマ'),
('映画'),
('スポーツ'),
('ペット');
```
\
番組のサンプルデータ
```sql
INSERT INTO programs (program_name, program_detail)
VALUES
('ドラマ1', 'これは素晴らしいドラマシリーズです。最初から最後まであなたを魅了します。'),
('ドラマ2', 'このドラマは強烈な登場人物と緊迫感のあるストーリーテリングで視聴者を惹きつけます。'),
('ペット番組', 'ペットの世界へようこそ！この番組では、ペットの健康、訓練、ケアについての情報を提供します。'),
('スポーツ番組', 'スポーツの最新情報をお届けします。'),
('アニメ番組', 'アニメの最新情報をお届けします。'),
('映画番組', '映画の最新情報をお届けします。');
```
\
番組とジャンルの関係のサンプルデータ
```sql
INSERT INTO program_genres (program_id, genre_id)
VALUES
(1, 2),
(2, 2),
(3, 5),
(4, 4),
(5, 1),
(6, 3),
(6, 5);
```
1. ドラマ1はドラマジャンルに属する
2. ドラマ2はドラマジャンルに属する
3. ペット番組はペットジャンルに属する
4. スポーツ番組はスポーツジャンルに属する
5. アニメ番組はアニメジャンルに属する
6. 映画番組は映画ジャンルに属する
7. ペット番組はペットジャンルに属する

\
エピソードのサンプルデータ
```sql
INSERT INTO episodes (program_id, season_number, episode_number, title, episode_detail, duration, release_date)
VALUES
(1, 1, 1, 'ドラマ1: 第一章 - 運命の出会い', '主人公のジョンは新たな都市での生活をスタート。そこで彼は運命的な出会いを果たす。', 60, '2023-05-01'),
(1, 1, 2, 'ドラマ1: 第二章 - 試練', 'ジョンは新たな環境での試練に直面する。彼は自分の運命に立ち向かうことができるのだろうか。', 60, '2023-05-08'),
(2, 1, 1, 'アニメ1: 開幕 - 新たなる冒険', '少年ヒロシは、未知の世界への大冒険に足を踏み出す。', 30, '2023-05-01'),
(2, 1, 2, 'アニメ1: 旅立ち - ヒロシの挑戦', 'ヒロシは新たな仲間と出会い、困難に立ち向かう決意を新たにする。', 30, '2023-05-08'),
(3, NULL, NULL, '一発逆転！スポーツ奇跡の瞬間', 'スポーツの歴史に残る感動的な一発逆転の瞬間を集めました。', 120, '2023-05-01'),
(4, 1, 1, 'ペットライフ：犬と猫の仲良し日記', '犬と猫が一緒に暮らす家庭での楽しみや挑戦を描いたエピソード。', 30, '2023-05-01');
```
\
番組スケジュールのサンプルデータ
```sql
INSERT INTO program_schedule (channel_id, time_slot_id, program_id, episode_id)
VALUES
(1, 1, 1, 1),
(1, 2, 1, 2),
(2, 3, 2, 1),
(2, 4, 2, 2),
(3, 5, 4, NULL),
(4, 6, 3, 1);
```

1. ドラマチャンネル、00:00-01:00、ドラマ1のエピソード1
2. ドラマチャンネル、01:00-02:00、ドラマ1のエピソード2
3. アニメチャンネル、02:00-03:00、ドラマ2のエピソード1
4. アニメチャンネル、03:00-04:00、ドラマ2のエピソード2
5. スポーツチャンネル、04:00-05:00、スポーツ番組（エピソードなし）
6. ペットチャンネル、05:00-06:00、ペット番組のエピソード1
