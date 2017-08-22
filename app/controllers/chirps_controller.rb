class ChirpsController < ApplicationController

  def create
    @chirp = Chirp.new(chirp_params)
    if @chirp.save
      render json: @chirp
    else
      render json: @chirp.errors.full_messages, status: 422
    end
  end

  def show
    @chirp = Chirp.find(params[:id])
    if @chirp
      render json: @chirp
    else
      render json: @chirp.errors.full_messages, status: 404
    end
  end

  def index
    @chirps = if params[:user_id]
                Chirp.where(author_id: params[:user_id])
              else
                Chirp.all
              end
    render json: @chirps
  end

  def update
    @chirp = Chirp.find(params[:id])
    if @chirp.update(chirp_params)
      render json: @chirp
    else
      render json: @chirp.errors.full_messages, status: 422
    end
  end

  def destroy
    @chirp = Chirp.find(params[:id])
    if @chirp.destroy
      render json: @chirp
    else
      render plain: "You can't destroy what's not there."
    end
  end

  private

  def chirp_params
    params.require(:chirp).permit(:body, :author_id)
  end
end
