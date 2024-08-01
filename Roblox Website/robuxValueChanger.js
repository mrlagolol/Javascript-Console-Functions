// You wanna have some fun and make your robux increase or decrease really fast? Well then this code is for you!! :D
// First, go to the roblox website http://roblox.com and open developer tools
// Then, navagate to the console tab
// Copy and paste the code below
// Then use the changeRobux() function. -> changeRobux(initialValue, finalValue, speed_in_ms, increment)

// PARAMS:
//   initialValue -> the value you wanna start with
//   finalValue -> the value you wanna end with
//   the speed in milli seconds
//   the how much you wanna increment

const robuxDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // creates a delay function

// This function is used to change a raw number (465241) to how roblox displays it (465K+)
function robuxValue(i) {
    robuxInString = i.toString()
    switch (robuxInString.length) {
        case 4:
            return `${robuxInString.slice(0, 1)},${robuxInString.slice(1, 4)}` // ex.. 1,375
        case 5:
            if (robuxInString.slice(2, 3) == "0") {
                return `${robuxInString.slice(0, 2)}K+` // ex.. 16K+
            }
            else {
                return `${robuxInString.slice(0, 2)}.${robuxInString.slice(2, 3)}K+` // ex.. 16.3K+
            }
        case 6:
            return `${robuxInString.slice(0, 3)}K+` // ex.. 216K+
        case 7:
            return `${robuxInString.slice(0, 1)}M+` // ex.. 2M+
        case 8:
            return `${robuxInString.slice(0, 2)}M+` // ex.. 12M+
        case 9:
            return `${robuxInString.slice(0, 3)}M+` // ex.. 246M+
        case 10:
            return `${robuxInString.slice(0, 1)}B+` // ex.. 8B+
        case 11:
            return `${robuxInString.slice(0, 2)}B+` // ex.. 42B+
        case 12:
            return `${robuxInString.slice(0, 3)}B+` // ex.. 894B+
        case 13:
            return `${robuxInString.slice(0, 1)}T+` // ex.. 7T+
        case 14:
            return `${robuxInString.slice(0, 2)}T+` // ex.. 26T+
        case 15:
            return `${robuxInString.slice(0, 3)}T+` // ex.. 923T+
        default:
            return robuxInString
    }
}

const changeRobux = async (initialValue, finalValue, speed_in_ms, increment = 1) => {
    // IF we want to increase in robux
    if (finalValue > initialValue) {
        for (let i = initialValue; i <= finalValue; i += increment) {
            await robuxDelay(speed_in_ms); // pauses for set amount of time
            document.getElementById("nav-robux-amount").innerHTML = robuxValue(i) // gets the robux element from the page and changes it to the variable i
        }
    }

    // IF we want to decrease in robux
    else if (finalValue < initialValue) {
        for (let i = initialValue; i >= finalValue; i--) {
            await robuxDelay(speed_in_ms); // pauses for set amount of time
            document.getElementById("nav-robux-amount").innerHTML = robuxValue(i) // gets the robux element from the page and changes it to the variable i
        }
    }

    else {
        console.log("Initial and Final values can't be the same thing!!")
    }
}
