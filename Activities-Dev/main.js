import { findByProps } from '@cumcord/modules/webpack';
import { instead } from '@cumcord/patcher'
import { dispatch } from '@cumcord/modules/common/FluxDispatcher'

export default () => {
  let Activities
  return {
    onLoad() {
      // Hacky way to fix crashing sometimes
      dispatch({type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",applicationId: "976052223358406656",originURL: `https://976052223358406656.discordsays.com/`});
      Object.defineProperty(findByProps("testModeEmbeddedApplicationId"),"testModeApplicationId", {value: undefined});
      Activities = instead('fetchShelf', findByProps("fetchShelf"), () => {
        return dispatch({
             type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS",
             guildId: findByProps("getLastSelectedGuildId").getLastSelectedGuildId(),
             items: [
              {
                  "application_id": "755600276941176913",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "773336526917861400",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "814288819477020702",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "879864070101172255",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "879863881349087252",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "878067389634314250",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "763133495793942528",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "880218832743055411",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "878067427668275241",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "902271746701414431",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                  "application_id": "879863753519292467",
                  "expires_on": null,
                  "new_until": null,
                  "nitro_requirement": false,
                  "premium_tier_level": 0
              },
              {
                "application_id": "879864010126786570",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "879864104980979792",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "879863923543785532",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "891001866073296967",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "832012586023256104",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "832012682520428625",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "832013108234289153",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              },
              {
                "application_id": "910224161476083792",
                "expires_on": null,
                "new_until": null,
                "nitro_requirement": false,
                "premium_tier_level": 0
              }
          ],
      })
      })
    },
    onUnload() {
      Activities()
    }
  }
}
