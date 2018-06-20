import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Skills } from '../../model/skills/skills.model';

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

  public getSkillGroups(): AngularFireList<{}> {
    return this.afdb.list<Skills>('skills');
  }

  //  Other methods required:

  //getSkillsByGroup(skillGroup)

}
