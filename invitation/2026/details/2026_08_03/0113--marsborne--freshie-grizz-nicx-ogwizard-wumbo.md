### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, nicx, ogwizard, WUMBO<br />
Global Rank: [113](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [25]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  957.0<br />
<br />
Final Rank Value (957.0) = Starting Rank Value (957.5) + Head To Head Adjustments (-0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.456[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 957.5
- 400 + ( ( 0.288 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 957.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       16 | 2026-08-01 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |   -15.10 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           21 |       45 | 2026-07-31 | regain          | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.508 (0.073)    | 0 (0.000) |    10.31 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           20 |       94 | 2026-07-29 | NRG             | L   | 1.000      | -            | -                | -                | -         |    -5.80 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           19 |      111 | 2026-07-28 | LAG             | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.434 (0.062)    | 0 (0.000) |    11.04 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           18 |      579 | 2026-07-09 | regain          | L   | 1.000      | -            | -                | -                | -         |   -22.19 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           17 |      961 | 2026-06-14 | Iowa Stormboar  | W   | 0.868      | 0.303        | 0.010 (0.003)    | 0.324 (0.085)    | 0 (0.000) |     6.36 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           16 |      989 | 2026-06-13 | Festina Lente   | W   | 0.862      | -            | -                | -                | 0 (0.000) |     3.63 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           15 |     1038 | 2026-06-12 | Overtake Sector | W   | 0.856      | 0.303        | 0.005 (0.001)    | 0.135 (0.035)    | -         |     3.86 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           14 |     1074 | 2026-06-11 | NuTorious       | W   | 0.849      | 0.303        | 0.004 (0.001)    | 0.299 (0.077)    | -         |     8.93 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           13 |     1310 | 2026-05-31 | Chicken Coop    | L   | 0.775      | -            | -                | -                | -         |   -11.38 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           12 |     1318 | 2026-05-31 | SportsBetExpert | W   | 0.774      | 0.294        | 0.006 (0.001)    | 0.341 (0.078)    | 1 (0.774) |    12.18 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           11 |     1326 | 2026-05-31 | Chicken Coop    | L   | 0.773      | -            | -                | -                | -         |   -11.73 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           10 |     1346 | 2026-05-30 | Reign Above     | W   | 0.768      | 0.294        | -                | 0.180 (0.041)    | 1 (0.768) |     3.84 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            9 |     1361 | 2026-05-30 | LAG             | W   | 0.767      | 0.294        | 0.014 (0.003)    | 0.434 (0.098)    | 1 (0.767) |    10.24 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            8 |     1593 | 2026-05-24 | Overtake Sector | W   | 0.729      | 0.278        | 0.005 (0.001)    | -                | -         |     3.38 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            7 |     1597 | 2026-05-24 | SportsBetExpert | L   | 0.728      | -            | -                | -                | -         |   -11.73 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            6 |     2558 | 2026-04-26 | Passion UA      | L   | 0.541      | -            | -                | -                | -         |    -6.49 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |     2573 | 2026-04-26 | Fisher College  | L   | 0.541      | -            | -                | -                | -         |    -8.30 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |     2611 | 2026-04-25 | M80             | W   | 0.537      | 0.371        | 0.072 (0.014)    | 0.644 (0.128)    | 1 (0.537) |    14.79 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |     2615 | 2026-04-25 | Voca            | W   | 0.536      | 0.371        | 0.030 (0.006)    | 0.525 (0.104)    | 1 (0.536) |     9.78 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |     2625 | 2026-04-25 | FRZ             | W   | 0.535      | -            | -                | -                | 1 (0.535) |     1.04 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |     2634 | 2026-04-25 | Voca            | L   | 0.534      | -            | -                | -                | -         |    -7.12 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,475.91)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.868 | $3,000.00      | $2,605.42       |
| 2026-05-31 |      0.775 | $1,200.00      | $930.02         |
| 2026-05-24 |      0.729 | $250.00        | $182.26         |
| 2026-04-26 |      0.542 | $1,400.00      | $758.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
