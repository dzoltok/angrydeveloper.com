class PostsController < ApplicationController
  before_action :authenticate_request, only: [ :create ]

  def index
    @posts = Post.all.order(created_at: :desc)
    render json: @posts, include: { user: { only: [:handle] } }, only: [:id, :title, :body]
  end

  def create
    @post = @current_user.posts.build(post_params)
    if @post.save
      render json: @post, include: { user: { only: [:handle] } }, only: [:id, :title, :body], status: :created, location: post_url(@post, format: :json)
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
