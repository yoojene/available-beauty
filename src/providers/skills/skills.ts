import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Skills } from '../../model/skills/skills.model';
import * as moment from 'moment';

@Injectable()
export class SkillsProvider {
  constructor(private afdb: AngularFireDatabase) {
    console.log('Hello SkillsProvider Provider');
  }

  /**
   * Get all /skills
   *
   * @returns
   * @memberof SkillsProvider
   */

  public getSkillGroups() {
    return this.afdb.list('skills');
  }

  //  Other methods required:

  //getSkillsByGroup(skillGroup)

}
