class LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if @like.destroy
      render json: @like
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def likes_params
    params.require(:like).permit(:user_id, :chirp_id)
  end
end
