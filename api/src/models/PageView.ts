import DBModel from "./DBModel";

class PageView extends DBModel {

	page: string;
	id?: number;
	date?: string;

	constructor(name: string, id?: number, date?: string) {
		super();
		this.page = name;
		this.id = id;
		this.date = date;
	}

}

export default PageView;