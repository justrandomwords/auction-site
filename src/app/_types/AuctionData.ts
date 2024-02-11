export interface ShortAuctionData {
	id:        string;
	title:     string;
	price:     number;
	startTime: string;
	image:     string;
}


export interface FullAuctionData {
    id:          string;
    title:       string;
    price:       number;
    startTime:   string;
    history:     History[];
    images:      string[];
    descroption: string;
}

export interface History {
    amount:   number;
    name:     string;
    surname:  string;
    time:     string;
    increase: number;
}
