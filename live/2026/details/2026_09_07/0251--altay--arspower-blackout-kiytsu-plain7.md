### Roster Details<br />
Team Name: ALTAY<br />
Roster: ARSPOWER, Blackout, kiytsu, Plain7<br />
Global Rank: [251](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [170]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  649.1<br />
<br />
Final Rank Value (649.1) = Starting Rank Value (672.4) + Head To Head Adjustments (-23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 672.4
- 400 + ( ( 0.143 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 672.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1211 | 2026-08-01 | RayRay      | L   | 0.944      | -            | -                | -                | -         |   -14.44 | ARSPOWER, Blackout, kiytsu, nyx, Plain7  |
|            4 |     1219 | 2026-08-01 | DONSTU      | L   | 0.944      | -            | -                | -                | -         |   -12.37 | ARSPOWER, Blackout, kiytsu, nyx, Plain7  |
|            3 |     1439 | 2026-07-25 | DEPO        | L   | 0.898      | -            | -                | -                | -         |    -1.92 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |
|            2 |     1447 | 2026-07-25 | ZWAW        | W   | 0.897      | 0.396        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (0.897) |     8.62 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |
|            1 |     1456 | 2026-07-24 | Rune Eaters | L   | 0.896      | -            | -                | -                | -         |    -3.15 | ARSPOWER, Blackout, hase, kiytsu, Plain7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,143.63)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      0.952 | $250.00        | $237.96         |
| 2026-07-26 |      0.906 | $1,000.00      | $905.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
