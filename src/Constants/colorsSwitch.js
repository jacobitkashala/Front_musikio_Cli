
const colorsSwitch = (title) => {
	switch (title) {
		case 'afrocongo': {
			const colors = "#007970"
			return colors;
		}
		case 'reguer': {
			const colors = "#E0B51A"
			return colors;
		}
		case 'rumba': {
			const  colors = "#D14767"
			return colors;
		}
		case 'gospel': {
			const  colors = "#756ABF"
			return colors;
		}
		default: {
			const colors = "#E0B51A"
			return colors;
		}
	}
};



export default colorsSwitch;