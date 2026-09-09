### Roster Details<br />
Team Name: Dark Moon<br />
Roster: d3j4vy, keiyon, Maison, ri0dayungog<br />
Global Rank: [280](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  615.5<br />
<br />
Final Rank Value (615.5) = Starting Rank Value (618.4) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.115<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 618.4
- 400 + ( ( 0.115 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 618.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2034 | 2026-06-25 | DEPO       | L   | 0.703      | -            | -                | -                | -         |    -0.94 | d3j4vy, keiyon, Maison, ri0dayungog, Rui        |
|            6 |     2038 | 2026-06-25 | UPGRADE    | L   | 0.702      | -            | -                | -                | -         |    -1.84 | d3j4vy, keiyon, Maison, ri0dayungog, Rui        |
|            5 |     2617 | 2026-05-29 | DEPO       | L   | 0.524      | -            | -                | -                | -         |    -0.61 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            4 |     2622 | 2026-05-29 | Game Point | W   | 0.524      | 0.354        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.524) |     5.89 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            3 |     2637 | 2026-05-29 | Omega      | L   | 0.523      | -            | -                | -                | -         |    -0.55 | d3j4vy, keiyon, Maison, modeSavage, ri0dayungog |
|            2 |     2734 | 2026-05-26 | Color      | L   | 0.505      | -            | -                | -                | -         |    -1.52 | d3j4vy, keiyon, Leoo, ri0dayungog, Rui          |
|            1 |     2739 | 2026-05-26 | CYBERSHOKE | L   | 0.505      | -            | -                | -                | -         |    -3.34 | d3j4vy, keiyon, Leoo, ri0dayungog, Rui          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($268.75)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      0.537 | $500.00        | $268.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
