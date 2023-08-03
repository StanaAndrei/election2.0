import { axiosAuthInst, axiosInst } from ".";

const getPollWithVotes = async id => {
    try {
        const res = await axiosAuthInst.get(`/vote/${id}`)
        return res.data;
    } catch(err) {
        console.error(err);
        alert('ERROR!');
    }
}

const addVote = async (voteData) => {
    try {
        const res = await axiosAuthInst.post('/vote/', voteData)
        return res;
    } catch(err) {
        console.error(err);
        return null;
    }
}

const VoteAPI = {
    getPollWithVotes,
    addVote
}
export default VoteAPI;