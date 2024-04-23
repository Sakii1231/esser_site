import { getArray } from '$lib/utils.js';
export const load = async () => {
    let imgFolder = "frontpage"
    let fileArray = await getArray(imgFolder);
    // console.log(fileArray);

    return {
        fileArray,
        imgFolder
    };
};
