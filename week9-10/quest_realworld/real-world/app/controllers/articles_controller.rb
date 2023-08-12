class ArticlesController < ApplicationController
  def create
    @article = Article.new(article_params)
    @article.slug = generate_slug(@article.title)
    if @article.save
      render json: { article: @article.as_json(except: :id) }, status: :created
    else
      render json: { errors: 'Not found' }, status: :unprocessable_entity
    end
  end

  def show
    @article = Article.find_by(slug: params[:slug])
    if @article
      render json: { article: @article.as_json(except: :id) }, status: :ok
    else
      render json: { errors: 'Not found' }, status: :not_found
    end
  end

  def update
    @article = Article.find_by(slug: params[:slug])
    if @article
      @article.slug = generate_slug(article_params[:title]) # タイトルの変更に応じてslugを更新
      if @article.update(article_params)
        render json: { article: @article.as_json(except: :id) }, status: :ok
      else
        render json: { errors: @article.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { errors: 'Not found' }, status: :not_found
    end
  end

  def destroy
    @article = Article.find_by(slug: params[:slug])
    if @article
      @article.destroy
      head :no_content
    else
      render json: { errors: 'Not found' }, status: :not_found
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :description, :body, :slug)
  end

  def generate_slug(title)
    # タイトルをスラグ形式に変換するメソッド
    title.downcase.gsub(' ', '-') # gsubメソッドは、文字列内の指定されたパターン（空白スペース）を、指定された置換文字列（ハイフン）に置換します
  end
end
