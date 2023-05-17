
class Game
  attr_accessor :player, :enemy

  def initialize
    @player = Player.new
    @enemy = Enemy.new
  end

  def start
    puts "魔物が現れた！"
    Player.turn
    enemy.turn

  end
end
