import { Cat } from '../models/Cat'

const resolvers = {
  Query: {
    cat: (root, { name }) => (Cat.findOne({name: {$eq: name}})),
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (root, {name}) => {
      const cat = new Cat({name})
      await cat.save()
      console.log(cat)
      return cat
    }
  }
}

module.exports = {
  resolvers
}
