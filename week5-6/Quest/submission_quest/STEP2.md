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
MySQLサーバーの起動
```sql
mysql.server start
```
\
ユーザー名：practiceでログイン
```sql
mysql -u practice -p
```
\
データベースを作成
```sql
CREATE DATABASE internet_tv;
```
\
データベースを選択
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


CREATE TABLE time_slots (
    time_slot_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    UNIQUE (start_time, end_time)
);


CREATE TABLE genres (
    genre_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(255) NOT NULL,
    UNIQUE (genre_name)
);


CREATE TABLE programs (
    program_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR(255) NOT NULL,
    program_detail TEXT NOT NULL,
    UNIQUE (program_name)
);

CREATE TABLE program_genres (
    program_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (program_id, genre_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id),
    FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

CREATE TABLE series (
    series_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    program_id INT NOT NULL,
    series_name VARCHAR(255) NOT NULL,
    series_detail TEXT,
    FOREIGN KEY (program_id) REFERENCES programs(program_id)
);

CREATE TABLE seasons (
    season_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    series_id INT NOT NULL,
    season_number INT NOT NULL,
    season_name VARCHAR(255) NOT NULL,
    season_detail TEXT,
    FOREIGN KEY (series_id) REFERENCES series(series_id)
);

CREATE TABLE episodes (
    episode_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    season_id INT,
    episode_number INT,
    title VARCHAR(255) NOT NULL,
    episode_detail TEXT,
    duration INT,
    release_date DATE,
    FOREIGN KEY (season_id) REFERENCES seasons(season_id)
);


CREATE TABLE program_schedule (
    schedule_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    channel_id INT NOT NULL,
    time_slot_id INT NOT NULL,
    episode_id INT,
    view_count BIGINT DEFAULT 0,
    broadcast_date DATE,
    FOREIGN KEY (channel_id) REFERENCES channels(channel_id),
    FOREIGN KEY (time_slot_id) REFERENCES time_slots(time_slot_id),
    FOREIGN KEY (episode_id) REFERENCES episodes(episode_id)
);
```



##  サンプルデータを入れる
---

```sql
INSERT INTO channels (channel_name)
VALUES
('ドラマチャンネル'),
('アニメチャンネル'),
('映画チャンネル'),
('スポーツチャンネル'),
('ニュースチャンネル');

INSERT INTO time_slots (start_time, end_time)
VALUES
('00:00:00', '01:00:00'),
('01:00:00', '02:00:00'),
('02:00:00', '03:00:00'),
('03:00:00', '04:00:00'),
('04:00:00', '05:00:00'),
('05:00:00', '06:00:00'),
('06:00:00', '07:00:00'),
('07:00:00', '08:00:00'),
('08:00:00', '09:00:00'),
('09:00:00', '10:00:00'),
('10:00:00', '11:00:00'),
('11:00:00', '12:00:00'),
('12:00:00', '13:00:00'),
('13:00:00', '14:00:00'),
('14:00:00', '15:00:00'),
('15:00:00', '16:00:00'),
('16:00:00', '17:00:00'),
('17:00:00', '18:00:00'),
('18:00:00', '19:00:00'),
('19:00:00', '20:00:00'),
('20:00:00', '21:00:00'),
('21:00:00', '22:00:00'),
('22:00:00', '23:00:00'),
('23:00:00', '24:00:00');

INSERT INTO genres (genre_name)
VALUES
('アニメ'),
('ドラマ'),
('映画'),
('スポーツ'),
('ペット');

INSERT INTO programs (program_name, program_detail)
VALUES
('ドラマ1', 'これは素晴らしいドラマシリーズです。最初から最後まであなたを魅了します。'),
('ドラマ2', 'このドラマは強烈な登場人物と緊迫感のあるストーリーテリングで視聴者を惹きつけます。'),
('ペット番組', 'ペットの世界へようこそ！この番組では、ペットの健康、訓練、ケアについての情報を提供します。'),
('スポーツ番組', 'スポーツの最新情報をお届けします。'),
('アニメ番組', 'アニメの最新情報をお届けします。'),
('映画番組', '映画の最新情報をお届けします。');

INSERT INTO program_genres (program_id, genre_id)
VALUES
(1, 2),
(2, 2),
(3, 5),
(4, 4),
(5, 1),
(6, 3);

INSERT INTO series (program_id, series_name, series_detail)
VALUES
(1, 'ドラマ1シリーズ', '人々の心を掴む深遠な物語。'),
(2, 'ドラマ2シリーズ', '驚異のストーリーテリングと魅力的なキャラクター。');

INSERT INTO seasons (series_id, season_number, season_name, season_detail)
VALUES
(1, 1, 'ドラマ1: シーズン1', 'ジョンの新たな都市での生活が始まる。'),
(1, 2, 'ドラマ1: シーズン2', 'ジョンの都市生活に新たな変化が起こる。'),
(2, 1, 'ドラマ2: シーズン1', '刺激的なエピソードが視聴者を惹きつける。'),
(2, 2, 'ドラマ2: シーズン2', 'ドラマ2の新たな冒険が始まる。');

INSERT INTO episodes (season_id, episode_number, title, episode_detail, duration, release_date)
VALUES
(1, 1, 'ドラマ1: シーズン1: エピソード1', 'ジョンが新たな都市での生活を始める。', 60, '2023-01-01'),
(1, 2, 'ドラマ1: シーズン1: エピソード2', 'ジョンの新生活がさらに深まる。', 60, '2023-01-08'),
(2, 1, 'ドラマ1: シーズン2: エピソード1', '新たなシーズン、新たな問題が生じる。', 60, '2023-02-01'),
(2, 2, 'ドラマ1: シーズン2: エピソード2', 'ジョンの都市生活に新たな変化が起こる。', 60, '2023-02-08'),
(3, 1, 'ドラマ2: シーズン1: エピソード1', 'ドラマ2が開始。刺激的なエピソードで視聴者を引きつける。', 60, '2023-03-01'),
(3, 2, 'ドラマ2: シーズン1: エピソード2', 'ドラマ2の魅力が続く。', 60, '2023-03-08'),
(4, 1, 'ドラマ2: シーズン2: エピソード1', '新たなシーズン、新たな冒険。', 60, '2023-04-01'),
(4, 2, 'ドラマ2: シーズン2: エピソード2', 'ドラマ2の新たな冒険が始まる。', 60, '2023-04-08');

INSERT INTO program_schedule (channel_id, time_slot_id, episode_id, view_count, broadcast_date)
VALUES
(1, 1, 1, 100, '2023-05-20'),
(1, 2, 2, 150, '2023-05-20'),
(1, 3, 3, 200, '2023-05-21'),
(1, 4, 4, 120, '2023-05-21'),
(1, 5, 5, 80, '2023-05-22'),
(1, 6, 6, 95, '2023-05-22'),
(1, 7, 7, 50, '2023-05-23'),
(1, 8, 8, 70, '2023-05-23');

```
