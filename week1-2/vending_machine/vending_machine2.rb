
# 自販機クラス
class VendingMachine
  attr_accessor :name

  def initialize(name)
    @name = name
    @total_coin = 0
  end

  def press_button
    'cider'
  end

  def press_manufacturer_name
    @name
  end

  def deposit_coin(coin)
    puts @total_coin += coin
  end
end

vendingmachine = VendingMachine.new('サントリー')
puts vendingmachine.press_button
puts vendingmachine.press_manufacturer_name
vendingmachine.deposit_coin(100)
