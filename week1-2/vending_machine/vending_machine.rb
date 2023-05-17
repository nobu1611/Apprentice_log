# frozen_string_literal: true

# 自販機クラス
class VendingMachine
  attr_reader :name

  def initialize(name)
    @name = name
    @total = 0
    @cup = 0
  end

  def add_cup(cup)
    @cup += cup
    puts "#{cup}個のカップを追加しました"
  end

  def deposit_coin(coin)
    case coin
    when 100
      puts "#{coin}円投入されました"
      @total += coin
    else
      puts "#{coin}円は使えません"
    end
  end

  def press_button(item)
    if item.instance_of?(Cupcoffee) && @total >= item.price && @cup.positive?
      @total -= item.price
      @cup -= 1
      puts "#{item.name} cop coffeeが買えました"
    elsif item.instance_of?(Drink) || item.instance_of?(Snack) && @total >= item.price
      @total -= item.price
      puts "#{item.name}が買えました"
    else
      puts '商品が買えませんでした'
    end
  end
end

# 商品クラス
class Item
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def price
    @price.find { |item| item[:name] == @name }[:price]
  end
end

# 飲み物クラス
class Drink < Item
  def initialize(name)
    super
    @price = [
      { name: 'cola', price: 150 },
      { name: 'cider', price: 100 }
    ]
  end
end

# カップコーヒークラス
class Cupcoffee < Item
  def initialize(name)
    super
    @price = [
      { name: 'hot', price: 100 },
      { name: 'ice', price: 100 }
    ]
  end
end

# スナッククラス
class Snack < Item
  def initialize(name)
    super
    @price = [
      { name: 'ポテチ', price: 150 }
    ]
  end
end

hot_cup_coffee = Cupcoffee.new('hot')
cider = Drink.new('cider')
snack = Snack.new('ポテチ')
vending_machine = VendingMachine.new('サントリー')
vending_machine.deposit_coin(100)
vending_machine.deposit_coin(100)
puts vending_machine.press_button(cider)

puts vending_machine.press_button(hot_cup_coffee)
vending_machine.add_cup(1)
puts vending_machine.press_button(hot_cup_coffee)

puts vending_machine.press_button(snack)
vending_machine.deposit_coin(100)
vending_machine.deposit_coin(100)
puts vending_machine.press_button(snack)
