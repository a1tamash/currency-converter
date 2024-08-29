import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
	const [data, setData] = useState({});

	const getResponse = async () => {
		const data = await fetch(
			`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
		);

		const json = await data.json();

		setData(json[currency]);
	};

	useEffect(() => {
		getResponse();
	}, [currency]);

	return data;
};

export default useCurrencyInfo;
