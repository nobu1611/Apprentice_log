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

## 1. データベースの構築
## 2. ステップ1で設計したテーブルを構築
```sql
CREATE TABLE channels (
    channel_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    channel_name VARCHAR(255) NOT NULL,
    UNIQUE (channel_name)
);

CREATE TABLE time_slots (
    timeslot_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    timeslot VARCHAR(255) NOT NULL,
    UNIQUE (timeslot)
);

CREATE TABLE programs (
    program_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    program_name VARCHAR(255) NOT NULL,
    program_detail TEXT　NOT NULL,
    genre VARCHAR(255)
);

CREATE TABLE episodes (
    episode_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    season_number INT,
    episode_number INT,
    title VARCHAR(255) NOT NULL,
    episode_detail TEXT,
    duration INT,
    release_date DATE,
    views BIGINT
);

CREATE TABLE program_schedule (
    schedule_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    channel_id INT NOT NULL,
    timeslot_id INT NOT NULL,
    program_id INT NOT NULL,
    episode_id INT,
    FOREIGN KEY (channel_id) REFERENCES channels(channel_id),
    FOREIGN KEY (timeslot_id) REFERENCES time_slots(timeslot_id),
    FOREIGN KEY (program_id) REFERENCES programs(program_id),
    FOREIGN KEY (episode_id) REFERENCES episodes(episode_id),
    UNIQUE (channel_id, timeslot_id)
);
```

## 3. サンプルデータを入れる
