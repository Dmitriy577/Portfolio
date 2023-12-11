const boseUrl =
	"https://api.telegram.org/bot6179856455:AAEEfPMa0XZzh0cmdwaZkUYuuQz907j_2Q0";
const sendMassage = async(message: string): Promise<void> => {
	const url: string = `${boseUrl}sendMassage?chat_id=-1001986133767&text=${message}`;
	const response = await fetch(url)
}