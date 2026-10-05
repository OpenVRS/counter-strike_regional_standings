### Roster Details<br />
Team Name: EAC EXTRA<br />
Roster: ETYYY, Fallis, GA1De, stesso, Viggo<br />
Global Rank: [359](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [236]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  469.1<br />
<br />
Final Rank Value (469.1) = Starting Rank Value (450.8) + Head To Head Adjustments (18.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 450.8
- 400 + ( ( 0.025 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 450.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       61 | 2026-10-02 | 9INE          | L   | 1.000      | -            | -                | -                | -         |    -0.84 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            4 |       81 | 2026-10-02 | MTX           | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.047 (0.017)    | 1 (1.000) |    20.31 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            3 |       97 | 2026-10-02 | FOKUS         | L   | 1.000      | -            | -                | -                | -         |    -0.21 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            2 |      110 | 2026-10-02 | Johnny Speeds | L   | 1.000      | -            | -                | -                | -         |    -0.85 | ETYYY, Fallis, GA1De, stesso, Viggo |
|            1 |      124 | 2026-10-02 | JiJieHao      | L   | 1.000      | -            | -                | -                | -         |    -0.13 | ETYYY, Fallis, GA1De, stesso, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
