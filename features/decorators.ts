class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError('Opps boat was sunk in ocean')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch (e) {
        console.log('Oops, boat was sunk');
      }
    };
  };
}

new Boat().pilot();
