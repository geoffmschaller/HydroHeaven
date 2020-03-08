class DBModel {

	public id?: number;
	public date?: string;
	public getColumms: any = (): string => "";
	public getValues: any = (): string[] => {
		return []
	};

}

export default DBModel;