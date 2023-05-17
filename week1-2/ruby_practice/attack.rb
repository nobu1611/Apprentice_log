class Attack
  attr_accessor :name, :damage
  def initialize(name, damage)
    @name = name
    @damage = damage
  end

  def type
    puts "#{@name}を使った！"
    puts "敵に#{@damage}のダメージを与えた！"
  end
end
