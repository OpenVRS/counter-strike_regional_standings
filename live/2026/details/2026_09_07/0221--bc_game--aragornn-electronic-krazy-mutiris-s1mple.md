### Roster Details<br />
Team Name: BC.Game<br />
Roster: aragornN, electroNic, krazy, MUTiRiS, s1mple<br />
Global Rank: [221](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [151]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  677.0<br />
<br />
Final Rank Value (677.0) = Starting Rank Value (676.1) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.1
- 400 + ( ( 0.145 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 676.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     4306 | 2026-04-07 | FOKUS          | L   | 0.177      | -            | -                | -                | -         |    -0.27 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            9 |     4331 | 2026-04-06 | Voca           | W   | 0.172      | 1.000        | 0.030 (0.005)    | 0.377 (0.065)    | 1 (0.172) |     3.86 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            8 |     4393 | 2026-04-05 | MIBR           | L   | 0.164      | -            | -                | -                | -         |    -0.09 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            7 |     4464 | 2026-04-04 | The MongolZ    | L   | 0.157      | -            | -                | -                | -         |    -0.07 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            6 |     5223 | 2026-03-25 | HEROIC Academy | L   | 0.090      | -            | -                | -                | -         |    -1.42 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            5 |     5636 | 2026-03-17 | Västerås       | L   | 0.038      | -            | -                | -                | -         |    -0.90 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            4 |     5794 | 2026-03-13 | OG             | L   | 0.013      | -            | -                | -                | -         |    -0.06 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            3 |     5797 | 2026-03-13 | Romania        | L   | 0.013      | -            | -                | -                | -         |    -0.29 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            2 |     5806 | 2026-03-13 | Alliance       | L   | 0.012      | -            | -                | -                | -         |    -0.01 | aragornN, electroNic, krazy, MUTiRiS, s1mple |
|            1 |     5817 | 2026-03-13 | GRINGOS        | W   | 0.011      | 0.350        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.011) |     0.06 | aragornN, electroNic, krazy, MUTiRiS, s1mple |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,843.34)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-11 |      0.205 | $18,750.00     | $3,843.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
