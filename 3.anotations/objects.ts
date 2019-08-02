const profile = {
  name: "Foo",
  age: 100,
  coord: {
    lat: 109,
    lng: -28
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const {
  coord: { lat, lng }
}: { coord: { lat: number; lng: number } } = profile;
