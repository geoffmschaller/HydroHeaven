class DBModel {

	public id?: number;
	public getColumms: any = (): string => "";
	public getValues: any = (): string[] => {
		return []
	};

}

export default DBModel;