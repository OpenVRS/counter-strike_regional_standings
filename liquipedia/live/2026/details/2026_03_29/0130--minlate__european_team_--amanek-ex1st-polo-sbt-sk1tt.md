### Roster Details<br />
Team Name: MINLATE (European team)<br />
Roster: AMANEK, Ex1st, POLO, SBT, sk1tt<br />
Global Rank: [130](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [90]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  922.4<br />
<br />
Final Rank Value (922.4) = Starting Rank Value (969.7) + Head To Head Adjustments (-47.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.139[<sup>2</sup>](#table1)
- LAN Wins: 0.497[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.7
- 400 + ( ( 0.294 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 969.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.362
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      382 | 2026-03-20 | WOPA Esport            | L   | 1.000      | -            | -                | -                | -         |   -16.69 | Ex1st, nestee, POLO, SBT, sk1tt |
|           39 |      418 | 2026-03-19 | Mousquetaires          | L   | 1.000      | -            | -                | -                | -         |   -22.07 | Ex1st, nestee, POLO, SBT, sk1tt |
|           38 |      504 | 2026-03-17 | UNiTY esports          | W   | 1.000      | 0.384        | 0.004 (0.001)    | 0.479 (0.184)    | 0 (0.000) |    17.72 | Ex1st, nestee, POLO, SBT, sk1tt |
|           37 |      547 | 2026-03-16 | KHAN                   | W   | 1.000      | -            | -                | -                | -         |     1.43 | Ex1st, nestee, POLO, SBT, sk1tt |
|           36 |     1609 | 2026-02-22 | GamerLegion            | L   | 0.966      | -            | -                | -                | -         |    -1.56 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           35 |     1623 | 2026-02-22 | Avanti Esport          | W   | 0.965      | -            | -                | -                | 1 (0.965) |     1.38 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           34 |     1630 | 2026-02-22 | Phantom Esports        | L   | 0.964      | -            | -                | -                | -         |    -7.98 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           33 |     1651 | 2026-02-22 | ECSTATIC               | L   | 0.964      | -            | -                | -                | -         |    -3.44 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           32 |     1657 | 2026-02-22 | SINNERS Esports        | L   | 0.963      | -            | -                | -                | -         |    -1.75 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           31 |     2008 | 2026-02-15 | FORZE Reload           | L   | 0.918      | -            | -                | -                | -         |   -14.62 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           30 |     2126 | 2026-02-13 | ELITenergy             | L   | 0.905      | -            | -                | -                | -         |   -22.84 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           29 |     2470 | 2026-02-02 | FORZE Reload           | L   | 0.832      | -            | -                | -                | -         |   -14.57 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           28 |     2515 | 2026-02-01 | Magic (Russian team)   | L   | 0.823      | -            | -                | -                | -         |    -8.13 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           27 |     2580 | 2026-01-30 | KOLESIE                | L   | 0.811      | -            | -                | -                | -         |    -6.69 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           26 |     2635 | 2026-01-28 | AM Gaming              | W   | 0.797      | 0.435        | 0.020 (0.007)    | 0.577 (0.200)    | -         |    19.21 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           25 |     2707 | 2026-01-25 | 1w Team                | W   | 0.776      | 0.435        | 0.033 (0.011)    | 0.591 (0.199)    | -         |    19.71 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           24 |     2744 | 2026-01-24 | Hashiras               | W   | 0.769      | 0.384        | 0.000 (0.000)    | 0.466 (0.138)    | -         |     7.22 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           23 |     2761 | 2026-01-23 | Eternal Fire           | W   | 0.765      | 0.384        | 0.006 (0.002)    | 0.707 (0.208)    | -         |    19.09 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           22 |     2833 | 2026-01-22 | MASONIC                | W   | 0.757      | 0.384        | -                | 0.563 (0.164)    | -         |    13.44 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           21 |     2856 | 2026-01-21 | Eternal Fire           | L   | 0.752      | -            | -                | -                | -         |    -4.15 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           20 |     2983 | 2026-01-17 | Betclic Apogee Esports | L   | 0.724      | -            | -                | -                | -         |    -3.07 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           19 |     3032 | 2026-01-16 | ARCRED                 | L   | 0.718      | -            | -                | -                | -         |    -4.16 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           18 |     3059 | 2026-01-16 | SAW                    | W   | 0.716      | 0.341        | 0.002 (0.000)    | 0.100 (0.024)    | 1 (0.716) |     8.91 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           17 |     3061 | 2026-01-16 | DimoniX Esports        | W   | 0.716      | -            | -                | -                | 1 (0.716) |     1.01 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           16 |     3094 | 2026-01-15 | WOPA Esport            | W   | 0.709      | 0.384        | 0.002 (0.001)    | 0.384 (0.105)    | -         |    12.52 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           15 |     3110 | 2026-01-14 | ARCRED                 | L   | 0.703      | -            | -                | -                | -         |    -3.48 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           14 |     3208 | 2026-01-04 | ASTRAL Esports         | L   | 0.637      | -            | -                | -                | -         |    -6.86 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           13 |     3211 | 2026-01-04 | Fingers Crossed        | W   | 0.636      | -            | -                | -                | 1 (0.636) |     1.27 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           12 |     3214 | 2026-01-04 | AaB esport             | L   | 0.636      | -            | -                | -                | -         |    -6.30 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           11 |     3219 | 2026-01-04 | ESC Gaming             | L   | 0.636      | -            | -                | -                | -         |    -7.62 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|           10 |     3220 | 2026-01-04 | SINQU Esports          | W   | 0.635      | 0.314        | -                | 0.072 (0.014)    | 1 (0.635) |     2.45 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            9 |     3282 | 2025-12-21 | TNC Esports            | L   | 0.544      | -            | -                | -                | -         |    -7.84 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            8 |     3290 | 2025-12-21 | Phantom Esports        | L   | 0.542      | -            | -                | -                | -         |    -2.31 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            7 |     3311 | 2025-12-20 | TNC Esports            | W   | 0.537      | 0.296        | 0.025 (0.004)    | 1.000 (0.159)    | 1 (0.537) |     9.13 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            6 |     3942 | 2025-11-20 | Illwill                | L   | 0.338      | -            | -                | -                | -         |    -8.49 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            5 |     3956 | 2025-11-20 | GenOne                 | L   | 0.337      | -            | -                | -                | -         |    -5.85 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            4 |     3964 | 2025-11-20 | Illwill                | W   | 0.336      | -            | -                | -                | 1 (0.336) |     2.08 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            3 |     4508 | 2025-11-02 | Team Nemesis           | L   | 0.217      | -            | -                | -                | -         |    -5.47 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            2 |     4532 | 2025-11-01 | Prestige Esport        | W   | 0.211      | 0.305        | 0.001 (0.000)    | -                | 1 (0.211) |     0.73 | AMANEK, Ex1st, POLO, SBT, sk1tt |
|            1 |     4542 | 2025-11-01 | Team Nemesis           | W   | 0.210      | 0.305        | 0.005 (0.000)    | -                | 1 (0.210) |     1.30 | AMANEK, Ex1st, POLO, SBT, sk1tt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($655.16)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.545 | $626.35        | $341.33         |
| 2025-11-02 |      0.217 | $1,447.05      | $313.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
