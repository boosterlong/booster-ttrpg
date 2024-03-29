export const armorByWealth = (
  {
    "cheap": [
      {
        "name": "Padded Armor",
        "ac": 11,
        "max_dex": 100
      },
      {
        "name": "Leather Armor",
        "ac": 11,
        "max_dex": 100
      },
      {
        "name": "no armor",
        "ac": 8,
        "max_dex": 100
      },
      {
        "name": "Animal Skins",
        "ac": 12,
        "max_dex": 2
      }
    ],
    "rich": [
      {
        "name": "Fine Studded Leather Armor",
        "ac": 12,
        "max_dex": 100
      },
      {
        "name": "Elegant Halfplate",
        "ac":14,
        "max_dex": 3
      },
      {
        "name": "Full Plate",
        "ac":18,
        "max_dex": 0
      },
      {
        "name": "Enchanted Travelling Clothes",
        "ac":15,
        "max_dex": 2
      }
    ],
    "legendary": [
      {
        "name": "Crystal Armor",
        "ac": 18,
        "max_dex": 3,
        "desc": "This crystal armor shimmers in the light.",
        "special_ability": [
          {
            "name": "Magic Resistance",
            "desc": "This monster has advantage on saving throws against spells and other magical effects."
          }
        ]
      },
      {
        "name": "+2 Full Plate",
        "ac": 20,
        "max_dex": 0,
        "special_ability": []
      },
      {
        "name": "Demonskin Leather Armor",
        "ac": 16,
        "max_dex": 100,
        "desc": "This armor stitched from the hide of a demon grants resistance to fire damage.",
        "special_ability": [
          {
            "name": "Fire Resistance",
            "desc": "This monster has resistance to fire damage."
          }
        ]
      },
      {
        "name": "Chimeric Hide Armor",
        "ac": 17,
        "max_dex": 4,
        "desc": "This armor is patched together from various mythical beasts.",
        "special_ability": [
          {
            "name": "Pack Tactics",
            "desc": "This monster has advantage on an attack roll against a creature if at least one of their allies is within 5 feet of their target."
          }
        ]
      }
    ],
  }
  )

  export const weaponsByWealth = (
    {
      "cheap": [
        {
          "name": "Shank",
          "damage_die": '1d4',
          "finesse": false
        },
        {
          "name": "Leather Armor",
          "ac": 11,
          "max_dex": 100
        },
        {
          "name": "no armor",
          "ac": 8,
          "max_dex": 100
        },
        {
          "name": "Animal Skins",
          "ac": 12,
          "max_dex": 2
        }
      ],
      "rich": [
        {
          "name": "Fine Studded Leather Armor",
          "ac": 12,
          "max_dex": 100
        },
        {
          "name": "Elegant Halfplate",
          "ac":14,
          "max_dex": 3
        },
        {
          "name": "Full Plate",
          "ac":18,
          "max_dex": 0
        },
        {
          "name": "Enchanted Travelling Clothes",
          "ac":15,
          "max_dex": 2
        }
      ],
      "legendary": [
        {
          "name": "Shank",
          "damage_die": '1d4',
          "finesse": false
        }
      ],
    }
    )
  