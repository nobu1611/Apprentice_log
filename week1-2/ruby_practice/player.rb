require 'attack'

class Player
  attr_accessor :name, :hp

  def initialize(name)
    @name = name
    @hp = 20
  end

  def turn
    puts "あなたのターンです。"
    puts "どうしますか？"
    puts "1. 攻撃"
    puts "2. 回復"
    print "選択肢を選んでください: "
    choice = gets.chomp.to_i
    case choice
    when 1
      attack
    when 2
      heal
    else
      puts "1~2の数字を入力してください。"
      turn
    end
  end
end
