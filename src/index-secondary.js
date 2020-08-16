
// async function start() {
// 	return await Promise.resolve('async await is working')
// }


// start().then(console.log)



class Util {
	static id = new Date()
}

console.log('Util ID:',Util.id)



const User = {
	name : 'Alex',
	color: 'blie',
	year: 2020,
}


const {name, color, ...arg} = User

console.log(name)
console.log(color)
console.log(arg)

