import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const flyAndScale = (
	node,
	params = { y: -8, x: 0, start: 0.95, duration: 150 }
) => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	const scaleConversion = (valueA, scaleA, scaleB) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style) => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, "");
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

function extractFileName(inputString) {
    // Split the inputString by '.'
    const parts = inputString.split('.');
    
    // If there are more than 1 '.' in the inputString
    if (parts.length > 2) {
        // Get the text before the 1st '.' and after the last '.'
        const firstPart = parts[0];
        const lastPart = parts[parts.length - 1];
        
        // Reconstruct the string with the text before the 1st '.' and after the last '.'
        const result = `${firstPart}.${lastPart}`;
        return result;
    }
    
    // If there are 1 or fewer '.' in the inputString, return the inputString unchanged
    return inputString;
}

export function getArray(imgFolder){
	return new Promise((resolve, reject) => {
		let fileNames = [];
		const imageModules = import.meta.glob('/static/work/img/**/*.webp');
		const filteredImageModules = Object.entries(imageModules).reduce((acc, [path, module]) => {
			if (path.includes(`/${imgFolder}/`)) {
				acc[path] = module;
			}
			return acc;
		}, {});
		let promises = [];
		for (const modulePath in filteredImageModules) {
			promises.push(filteredImageModules[modulePath]().then(({ default: imageUrl }) => {
				const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
				fileNames.push(extractFileName(fileName));
			}));
		}

		Promise.all(promises).then(() => {
			resolve(fileNames);
		}).catch(reject);
	});
}


export function adjustArrayLength(arr) {
	if (arr.length % 3 !== 0) {
	  const adjustedLength = Math.floor(arr.length / 3) * 3; // Get the next smaller number that is divisible by 3
	  arr = arr.slice(0, adjustedLength); // Trim the array to the adjusted length
	}
	return arr;
  }

export function divideArrayIntoThreeEqualParts(adjustedArray) {
	const partSize = adjustedArray.length / 3; // Calculate the size of each part
	const parts = {};
	for (let i = 0; i < 3; i++) {
	  parts[`images${i + 1}`] = adjustedArray.slice(i * partSize, (i + 1) * partSize); // Divide the array into parts and map to images variables
	}
	return parts;
  }