
const arr = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,5,19,23,2,10,23,27,1,27,5,31,2,9,31,35,1,35,5,39,2,6,39,43,1,43,5,47,2,47,10,51,2,51,6,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,1,71,5,75,1,13,75,79,1,6,79,83,2,83,13,87,1,87,6,91,1,10,91,95,1,95,9,99,2,99,13,103,1,103,6,107,2,107,6,111,1,111,2,115,1,115,13,0,99,2,0,14,0];
const codes =[];

function DoMagic2() {
    for (let noun = 0; noun < 100; noun++)
    {
        for (let verb = 0; verb < 100; verb++)
        {
            // Check if we have found the output we're asked for
            if (TryMatch(noun, verb) == 19690720)
            {
                document.write(
                    'Noun ' + noun + ' verb ' + verb
                );
                return;
            }
        }
    }
}

function TryMatch(noun, verb) {
    // Copy orignal array data
    console.log('1');
    for (let i = 0; i < arr.length; i++) {
        codes[i] = arr[i];
    }
    console.log('2');
    console.log(codes);
    codes[1] = noun;
    codes[2] = verb;
    // Execute intcode
    let pos = 0;
    while (codes[pos] !== 99)
    {
        console.log(codes[pos]);
        if (codes[pos] === 1)
        {
            codes[codes[pos + 3]] = codes[codes[pos + 1]] + codes[codes[pos + 2]];
        }
        else if (codes[pos] === 2)
        {
            codes[codes[pos + 3]] = codes[codes[pos + 1]] * codes[codes[pos + 2]];
        }
        pos += 4;
    }

    // Result is in address 0
    return codes[0];       
}
