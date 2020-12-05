import axios from "axios";

export const musicAPI = "";

export const audioPlaylist = [
    {
		title: "Tene",
		author: "Larry Gaga feat. Flavour",
		source: "Flashup",
		uri:
			"https://flashup24.com/always-on/Tene.mp3",
		imageSource:
			"https://www.google.com/imgres?imgurl=https%3A%2F%2Ftooxclusive.com%2Fwp-content%2Fuploads%2F2019%2F10%2FLarry-Gaaga-Tene-image.jpg&imgrefurl=https%3A%2F%2Ftooxclusive.com%2Flarry-gaaga-x-flavour-tene-new-song%2F&tbnid=n93IqpcKlAhVdM&vet=12ahUKEwi9qIH_xbftAhVLaBoKHQmmDTEQMygAegUIARCDAQ..i&docid=Ur4iuxxxaXgEDM&w=500&h=500&q=tene%20larry%20gaga&ved=2ahUKEwi9qIH_xbftAhVLaBoKHQmmDTEQMygAegUIARCDAQ",
	},
	{
		title: "Hamlet - Act I",
		author: "William Shakespeare",
		source: "Librivox",
		uri:
			"https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3",
		imageSource:
			"http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
	},
	{
		title: "Hamlet - Act II",
		author: "William Shakespeare",
		source: "Librivox",
		uri:
			"https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3",
		imageSource:
			"http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
	},
	{
		title: "Hamlet - Act III",
		author: "William Shakespeare",
		source: "Librivox",
		uri:
			"http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3",
		imageSource:
			"http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
	},
	{
		title: "Hamlet - Act IV",
		author: "William Shakespeare",
		source: "Librivox",
		uri:
			"https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3",
		imageSource:
			"http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
	},
	{
		title: "Hamlet - Act V",
		author: "William Shakespeare",
		source: "Librivox",
		uri:
			"https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3",
		imageSource:
			"http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
	},
];

export const loadAudioAsync = (trackInx) => {
    return axios.get(audioPlaylist[trackInx].uri)
        .then(res => res.data)
        .catch(err => console.log("Error fetching audio :>>", err));
}