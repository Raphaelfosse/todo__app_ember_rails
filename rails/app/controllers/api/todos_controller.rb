class Api::TodosController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo, status: :created
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def update
    todo = Todo.find(params[:id])

    if todo.update_attributes(todo_params)
      render json: todo
    else
      render json: todo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy
    head :no_content
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end
end
