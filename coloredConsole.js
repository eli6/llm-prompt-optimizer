class ColoredConsole {
    constructor() {
        this.colors = {
            'green': '\x1b[32m',
            'red': '\x1b[31m',
            'yellow': '\x1b[33m',
            'blue': '\x1b[34m',
            'magenta': '\x1b[35m',
            'cyan': '\x1b[36m',
            'white': '\x1b[37m',
            'reset': '\x1b[0m' // Resets the color to default
        };
    }

    print(color, prefix, message) {
        const colorCode = this.colors[color] || this.colors['white']; // Default to white if color not found
        console.log(); // Empty line for spacing before the message
        console.log(`${colorCode}${prefix}${message}${this.colors['reset']}`);
        console.log(); // Empty line for spacing after the message
    }

    printUnspaced(color, prefix, message) {
        const colorCode = this.colors[color] || this.colors['white']; // Default to white if color not found
        console.log(`${colorCode}${prefix}${message}${this.colors['reset']}`);
    }

    tableWithColorPrefix(color, prefix, tableData) {
        this.print(color, prefix, ''); // Print the colored prefix as a section header
        console.table(tableData); // Then print the table
    }
}

export { ColoredConsole };
