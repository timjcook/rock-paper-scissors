import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName,       // using faker
  lastName: faker.name.lastName,
});
