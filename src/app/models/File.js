import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  CheckPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Files;
