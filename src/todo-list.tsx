import React from "react";
import { Todo, TodoItem } from "./type";

class Main extends React.Component<{}, Todo> {
	state: Todo = {
		items: [],
	};

	handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const inputAdd = document.querySelector<HTMLInputElement>(".input-add");

		if (inputAdd!.value === "") return;

		const newItem: TodoItem = {
			text: inputAdd!.value,
			id: Date.now(),
		};

		this.setState((prevItem: any) => ({
			items: [...prevItem.items, newItem],
		}));

		inputAdd!.value = "";
	};

	handleDelete = (id: number) => {
		this.setState((deletedItem) => ({
			items: deletedItem.items.filter((item) => item.id !== id),
		}));
	};

	render() {
		return (
			<>
				<h1 className="text-center text-[80px] mb-[200px]">Todo List</h1>
				<div className="add relative bottom-[210px] left-[250px]">
					<form className="flex items-center gap-[10px] " onSubmit={this.handleSubmit}>
						<input
							className="input-add text-[20px] placeholder:pt-[10x] bg-inherit pl-[20px] rounded-[10px] border-[1px] border-white outline-none w-80 h-[50px]"
							type="text"
							placeholder="Create Your Plans"
						/>
						<button
							className="h-[50px] rounded-[10px] border-[1px] border-white w-[50px] pt-[10px]"
							type="submit"
						>
							Add
						</button>
					</form>
				</div>

				<div className="todos flex flex-col items-center pt-[10px] w-[900px] h-[500px] rounded-[10px] backdrop-blur-sm bg-white/10 mt-[-200px] overflow-scroll ">
					<ul className="list max-w-md text-[20px] flex flex-col gap-[20px] mt-[50px] scroll-smooth focus:scroll-auto">
						{this.state.items.map((item) => (
							<li className="border-b-[1px] border-white ml-[-140px] w-[700px]">
								<div className="flex items-center justify-between">
									<div>
										<input
											className="checkbox accent-green-500 w-[30px] h-[30px]"
											type="checkbox"
										/>
										<span className="pl-[20px] spanText text-[30px]">{item.text}</span>
									</div>
									<div className="flex items-center gap-[20px] select-none">
										<span
											className="cursor-pointer delete"
											onClick={() => this.handleDelete(item.id)}
										>
											❌
										</span>
										<span className="cursor-pointer">📝</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</>
		);
	}
}

export default Main;
